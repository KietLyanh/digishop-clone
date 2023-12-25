/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author Admin
 */
public class MobileData {
    private String standard_name,detail_treatment;
    private int standard_price;

    public MobileData(String standard_name, String detail_treatment, int standard_price) {
        this.standard_name = standard_name;
        this.detail_treatment = detail_treatment;
        this.standard_price = standard_price;
    }

    public String getStandard_name() {
        return standard_name;
    }

    public String getDetail_treatment() {
        return detail_treatment;
    }

    public int getStandard_price() {
        return standard_price;
    }
    
}
