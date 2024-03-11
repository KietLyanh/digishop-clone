/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.Users;
import ultil.PasswordUtil;

/**
 *
 * @author ngotr
 */
public class UsersDAOImpl implements UsersDAO{

    @Override
    public void registerUsers(String username, String password, String email, String rolename) {
    try (Connection cnt = DBcontextUsers.getConnection()) {
        cnt.setAutoCommit(false);

        // Thực hiện câu lệnh INSERT INTO users
        String sqlInsertUsers = "INSERT INTO users (username, password, email) VALUES (?,?,?);";
        try (PreparedStatement stInsertUsers = cnt.prepareStatement(sqlInsertUsers)) {
            stInsertUsers.setString(1, username);
            stInsertUsers.setString(2, password);
            stInsertUsers.setString(3, email);
            stInsertUsers.executeUpdate();
        }

        // Lấy giá trị LAST_INSERT_ID()
        String sqlLastUserId = "SET @last_userid = LAST_INSERT_ID();";
        try (PreparedStatement stLastUserId = cnt.prepareStatement(sqlLastUserId)) {
            stLastUserId.executeUpdate();
        }

        // Thiết lập giá trị cho @roleid
        String sqlSetRoleId = "SET @roleid = ?;";
        try (PreparedStatement stSetRoleId = cnt.prepareStatement(sqlSetRoleId)) {
            int roleId = (rolename.equals("ADMIN")) ? 1 : 2;
            stSetRoleId.setInt(1, roleId);
            stSetRoleId.executeUpdate();
        }

        // Thực hiện câu lệnh INSERT INTO userrole
        String sqlInsertUserRole = "INSERT INTO userrole (userid, roleid) VALUES (@last_userid, @roleid);";
        try (PreparedStatement stInsertUserRole = cnt.prepareStatement(sqlInsertUserRole)) {
            stInsertUserRole.executeUpdate();
        }
        cnt.commit();
    } catch (SQLException e) {
        e.printStackTrace();
        
    }
}


    @Override
    public Users loginUsers(String username, String password) {
            String query = "SELECT username,password,email,firstname,lastname,address,rolename FROM users,role,userrole WHERE username= ? AND users.userid = userrole.userid AND role.roleid = userrole.roleid";
            try  {
                Connection cnt = DBcontextUsers.getConnection();
                PreparedStatement st = cnt.prepareStatement(query);
                st.setString(1, username);  
                ResultSet rs = st.executeQuery();
                Users user = new Users();
                if (rs.next()) {
                    user.setUsername(rs.getString("username"));
                    user.setAddress(rs.getString("address"));
                    user.setEmail(rs.getString("email"));
                    user.setFirstname(rs.getString("firstname"));
                    user.setLastname(rs.getString("lastname"));
                    user.setRolename(rs.getString("rolename"));
                    user.setPassword(rs.getString("password"));
                }
                if(PasswordUtil.checkPassword(password, user.getPassword()))
                {
                    return user;
                }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Users profileUsers(String username, String email, String firstname, String lastname, String address, String rolename) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

   
    
}
