/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package dal;

import java.util.Set;
import model.Users;

/**
 *
 * @author ngotr
 */
public interface UsersDAO {
     public Users registerUsers(String username,String password,Set<String> rolename);
     public Users loginUsers(String username,String password);
     public Users profileUsers(String username,String email,String firstname,String lastname,String dateofbirth,String address,Set<String> rolename);
}
