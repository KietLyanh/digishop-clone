/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Set;
import model.Users;

/**
 *
 * @author ngotr
 */
public class UsersDAOImpl implements UsersDAO{

    @Override
    public Users registerUsers(String username, String password, Set<String> rolename) {
        return null;
    }

    @Override
    public Users loginUsers(String username, String password) {
            String query = "SELECT username,password FROM usertable WHERE username = ? AND password = ?";
            try  {
                Connection cnt = DBcontextUsers.getConnection();
                PreparedStatement st = cnt.prepareStatement(query);
                st.setString(1, username);
                st.setString(2, password); 
                ResultSet rs = st.executeQuery();
                if (rs.next()) {
                    Users user = new Users();
                    user.setUsername(rs.getString("username"));
                    user.setPassword(rs.getString("password"));
                    return user;
                }
            
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Users profileUsers(String username, String email, String firstname, String lastname, String dateofbirth, String address, Set<String> rolename) {
        return null;
    }
    
}
