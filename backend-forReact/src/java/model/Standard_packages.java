/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author ngotr
 */
public class Standard_packages {
    private String detail_id,detail_treatment,detail_cancel;
    private String detail_check,detail_legacy,detail_extension,detail_hotline,detail_enrollment;
    private String standard_id, standard_name;
    private int standard_price,standard_timelimit;
    
    public Standard_packages(){}
     
    public Standard_packages(String standard_id,String standard_name, int standard_price, int standard_timelimit, String detail_id, String detail_treatment, String detail_cancel, String detail_check, String detail_legacy, String detail_extension, String detail_hotline, String detail_enrollment) {
        this.standard_id = standard_id;
        this.standard_name = standard_name;
        this.standard_price = standard_price;
        this.standard_timelimit = standard_timelimit;
        this.detail_id = detail_id;
        this.detail_treatment = detail_treatment;
        this.detail_cancel = detail_cancel;
        this.detail_check = detail_check;
        this.detail_legacy = detail_legacy;
        this.detail_extension = detail_extension;
        this.detail_hotline = detail_hotline;
        this.detail_enrollment = detail_enrollment;
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

    public String getStandard_name() {
        return standard_name;
    }

    public int getStandard_price() {
        return standard_price;
    }

    public int getStandard_timelimit() {
        return standard_timelimit;
    }

    public String getStandard_id() {
        return standard_id;
    }
  
}
