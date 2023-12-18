/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author Admin
 */
public class Child_packages {

    private String child_name, standard_id, detail_id;
    private int child_price, child_timeLimit;

    public Child_packages() {
    }

    public Child_packages(String child_name, String standard_id, String detail_id, int child_price, int child_timeLimit) {
        this.child_name = child_name;
        this.standard_id = standard_id;
        this.detail_id = detail_id;
        this.child_price = child_price;
        this.child_timeLimit = child_timeLimit;
    }

    public String getChild_name() {
        return child_name;
    }

    public String getStandard_id() {
        return standard_id;
    }

    public String getDetail_id() {
        return detail_id;
    }

    public int getChild_price() {
        return child_price;
    }

    public int getChild_timeLimit() {
        return child_timeLimit;
    }
    
}
