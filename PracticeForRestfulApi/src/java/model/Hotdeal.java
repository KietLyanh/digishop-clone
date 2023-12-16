/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author Admin
 */
public class Hotdeal {
    private String child_name,detail_treatment;
    private int child_price;

    public Hotdeal(String child_name, String detail_treatment, int child_price) {
        this.child_name = child_name;
        this.detail_treatment = detail_treatment;
        this.child_price = child_price;
    }

    public String getChild_name() {
        return child_name;
    }

    public String getDetail_treatment() {
        return detail_treatment;
    }

    public int getChild_price() {
        return child_price;
    }
    
}
