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
     public void registerUsers(String username,String password,String email ,String rolename);
     public Users loginUsers(String username,String password);
     public Users profileUsers(String username,String email,String firstname,String lastname,String address,String rolename);
}
