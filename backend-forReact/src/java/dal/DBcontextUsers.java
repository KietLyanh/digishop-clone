/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author ngotr
 */
public class DBcontextUsers {
     public static Connection getConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String jdbcUrl = "jdbc:mysql://localhost:3306/users";
            String username = "root";
            String password = "Dodaihoc2003*";
            return DriverManager.getConnection(jdbcUrl, username, password);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to connect to the database.", e);
        }
    }
}
