/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.All_Packages;
import model.Child_packages;
import model.Details;
import model.MobileData;
import model.Standard_packages;
import model.Sim;

/**
 *
 * @author Admin
 */
public class AllDAOImpl implements AllDAO {
    
    @Override
    public List<Details> getAllDetails() {
        List<Details> list = new ArrayList<>();
        try ( Connection connection = DBcontextPrepair_Package.getConnection();  PreparedStatement statement = connection.prepareStatement("SELECT * FROM details");  ResultSet rs = statement.executeQuery()) {
            
            while (rs.next()) {
                Details d = new Details(rs.getString("detail_id"),
                        rs.getString("detail_treatment"),
                        rs.getString("detail_cancel"),
                        rs.getString("detail_check"),
                        rs.getString("detail_legacy"),
                        rs.getString("detail_extension"),
                        rs.getString("detail_hotline"),
                        rs.getString("detail_enrollment")); // Các thuộc tính khác nếu có

                list.add(d);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
    @Override
    public List<Child_packages> getAllChild() {
        List<Child_packages> list = new ArrayList<>();
        try ( Connection connection = DBcontextPrepair_Package.getConnection();  PreparedStatement st = connection.prepareStatement("SELECT * FROM child_package LEFT JOIN details ON child_package.detail_id=details.detail_id");  ResultSet rs = st.executeQuery()) {
            while (rs.next()) {
                Child_packages c = new Child_packages(
                       rs.getString("child_name"),rs.getString("standard_id"), 
                        rs.getInt("child_price"),rs.getInt("child_timelimit"),rs.getString("detail_id"),
                        rs.getString("detail_treatment"),
                        rs.getString("detail_cancel"),
                        rs.getString("detail_check"),
                        rs.getString("detail_legacy"),
                        rs.getString("detail_extension"),
                        rs.getString("detail_hotline"),
                        rs.getString("detail_enrollment")
                );
                list.add(c);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    


    @Override
    public List<Sim> getSimNames() {
     List<Sim> list = new ArrayList<>();
     try( Connection cnt = DBcontextSims.getConnection(); 
             PreparedStatement st = cnt.prepareStatement("select sim_number_name from sim_numbers");  
             ResultSet rs = st.executeQuery()
             ){
         while(rs.next())
         {
             Sim s = new Sim(rs.getString("sim_number_name"));
             list.add(s);
         }
     }
     catch(Exception e)
     {
         e.printStackTrace();
     }
     return list;
    }

    @Override
    public List<MobileData> getMobiledatas() {
      List<MobileData> list = new ArrayList<>();
      try(
              Connection cnt = DBcontextPrepair_Package.getConnection();
              PreparedStatement st = cnt.prepareStatement("SELECT standard_name,standard_price,detail_treatment FROM \n" +
                "standard_package INNER JOIN details WHERE standard_package.detail_id = details.detail_id");
              ResultSet rs = st.executeQuery()
          ){
          while (rs.next())
          {
              MobileData mb = new MobileData(
                      rs.getString("standard_name"), 
                      rs.getString("detail_treatment"),
                      rs.getInt("standard_price"));
              list.add(mb);
          }
      }
      catch(Exception e)
      {
          e.printStackTrace();
      }
      return list;
    }

    @Override
    public List<Standard_packages> getMobileStandard(List<Standard_packages> list,int start,int end) {
        List<Standard_packages> arr = new ArrayList<>();
        for(int i = start; i < end; i++)
        {
            arr.add(list.get(i));
        }
        return arr;
    }

    @Override
    public List<Standard_packages> getAllMobileStandards(String orderby) {
      List<Standard_packages> list = new ArrayList<>();
      String sql = "SELECT * FROM standard_package LEFT JOIN details ON details.detail_id = standard_package.detail_id " + orderby;
      try(
              Connection cnt = DBcontextPrepair_Package.getConnection();
              
              PreparedStatement st = cnt.prepareStatement(sql);
              ResultSet rs = st.executeQuery()){
          while (rs.next()) {
                Standard_packages mb = new Standard_packages(rs.getString("standard_id"),rs.getString("standard_name"), 
                        rs.getInt("standard_price"),rs.getInt("standard_timelimit"),rs.getString("detail_id"),
                        rs.getString("detail_treatment"),
                        rs.getString("detail_cancel"),
                        rs.getString("detail_check"),
                        rs.getString("detail_legacy"),
                        rs.getString("detail_extension"),
                        rs.getString("detail_hotline"),
                        rs.getString("detail_enrollment"));
                list.add(mb);
            }
          
      }
      catch(SQLException e)
      {
          System.out.println(e);
      }
      return list;
    }
    
    
    


    @Override
    public Standard_packages getMobileStandardByName(String name) {
        String sql = "SELECT * FROM standard_package LEFT JOIN details ON details.detail_id = standard_package.detail_id WHERE standard_name= ?";
        try{
                Connection cnt = DBcontextPrepair_Package.getConnection();
                PreparedStatement st = cnt.prepareStatement(sql);
                st.setString(1, name);
                ResultSet rs = st.executeQuery();
            if(rs.next())
            {
                Standard_packages mb = new Standard_packages(rs.getString("standard_id"),rs.getString("standard_name"), 
                        rs.getInt("standard_price"),rs.getInt("standard_timelimit"),rs.getString("detail_id"),
                        rs.getString("detail_treatment"),
                        rs.getString("detail_cancel"),
                        rs.getString("detail_check"),
                        rs.getString("detail_legacy"),
                        rs.getString("detail_extension"),
                        rs.getString("detail_hotline"),
                        rs.getString("detail_enrollment"));
                return mb;
            }
        }
        catch(SQLException e)
        {
            e.printStackTrace();
            System.out.println(e);
        }
        return null;
    }
    
//       public static void main(String[] args) {
//        AllDAOImpl c = new AllDAOImpl();
//        Standard_packages list = c.getMobileStandardByName("VD120N");
//        System.out.println(list);
//    }

   

//    public static void main(String[] args) {
//        AllDAOImpl c = new AllDAOImpl();
//        List<MobileStandard> list = c.get
//    }

    

    
    
   
}
 
