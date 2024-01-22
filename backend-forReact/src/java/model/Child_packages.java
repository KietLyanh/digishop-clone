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

    private String child_name,standard_id;
    private int child_price, child_timeLimit;
    private String detail_id,detail_treatment,detail_cancel;
    private String detail_check,detail_legacy,detail_extension,detail_hotline,detail_enrollment;

    public Child_packages() {
    }

    public Child_packages(String child_name, String standard_id, int child_price, int child_timeLimit, String detail_id, String detail_treatment, String detail_cancel, String detail_check, String detail_legacy, String detail_extension, String detail_hotline, String detail_enrollment) {
        this.child_name = child_name;
        this.standard_id = standard_id;
        this.child_price = child_price;
        this.child_timeLimit = child_timeLimit;
        this.detail_id = detail_id;
        this.detail_treatment = detail_treatment;
        this.detail_cancel = detail_cancel;
        this.detail_check = detail_check;
        this.detail_legacy = detail_legacy;
        this.detail_extension = detail_extension;
        this.detail_hotline = detail_hotline;
        this.detail_enrollment = detail_enrollment;
    }

    public String getChild_name() {
        return child_name;
    }

    public String getStandard_id() {
        return standard_id;
    }

    public int getChild_price() {
        return child_price;
    }

    public int getChild_timeLimit() {
        return child_timeLimit;
    }

    public String getDetail_id() {
        return detail_id;
    }

    public String getDetail_treatment() {
        return detail_treatment;
    }

    public String getDetail_cancel() {
        return detail_cancel;
    }

    public String getDetail_check() {
        return detail_check;
    }

    public String getDetail_legacy() {
        return detail_legacy;
    }

    public String getDetail_extension() {
        return detail_extension;
    }

    public String getDetail_hotline() {
        return detail_hotline;
    }

    public String getDetail_enrollment() {
        return detail_enrollment;
    }

   
    
}
