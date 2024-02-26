package dal;


import java.util.List;
import model.All_Packages;
import model.Child_packages;
import model.Details;
import model.MobileData;
import model.Standard_packages;
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
    List<Sim> getSimNames();
    List<MobileData> getMobiledatas();
    List<Standard_packages> getMobileStandard(List<Standard_packages> list,int start,int end);
    List<Standard_packages> getAllMobileStandards(String orderby);
    Standard_packages getMobileStandardByName(String name);
    
}
