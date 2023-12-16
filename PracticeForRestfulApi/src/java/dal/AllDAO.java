package dal;

import java.util.List;
import model.Child_packages;
import model.Details;
import model.Hotdeal;
import model.Sim;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

/**
 *
 * @author Admin
 */
public interface AllDAO {
    List<Details> getAllDetails();
    List<Child_packages> getAllChild();
    List<Hotdeal> getAllHotdeals();
    List<Sim> getSimNames();
}
