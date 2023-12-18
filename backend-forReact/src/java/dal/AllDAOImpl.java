/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import model.Child_packages;
import model.Details;
import model.Hotdeal;
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
        try ( Connection connection = DBcontextPrepair_Package.getConnection();  PreparedStatement st = connection.prepareStatement("SELECT * FROM child_package");  ResultSet rs = st.executeQuery()) {
            while (rs.next()) {
                Child_packages c = new Child_packages(
                        rs.getString("child_name"),
                        rs.getString("standard_id"),
                        rs.getString("detail_id"),
                        rs.getInt("child_price"),
                        rs.getInt("child_timeLimit")
                );
                list.add(c);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
    @Override
    public List<Hotdeal> getAllHotdeals() {
        List<Hotdeal> list = new ArrayList<>();
        try (
                 Connection cnt = DBcontextPrepair_Package.getConnection();  PreparedStatement st = cnt.prepareStatement("SELECT child_name,child_price,detail_treatment \n"
                + "FROM child_package INNER JOIN details WHERE details.detail_id = child_package.detail_id");  ResultSet rs = st.executeQuery()) {
            while (rs.next()) {
                Hotdeal h = new Hotdeal(
                        rs.getString("child_name"), rs.getString("detail_treatment"), rs.getInt("child_price"));
                list.add(h);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Sim> getSimNames() {
     List<Sim> list = new ArrayList<>();
     try( Connection cnt = DBcontextSims.getConnection();  PreparedStatement st = cnt.prepareStatement("select sim_number_name from sim_numbers");  ResultSet rs = st.executeQuery()
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
    
}
