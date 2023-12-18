package model;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Admin
 */
public class Sim {
//        `sim_numbers`.`sim_number_name`,
//    `sim_numbers`.`sim_number_type`,
//    `sim_numbers`.`sim_number_fee`,
//    `sim_numbers`.`sim_number_time`
//FROM `sims`.`sim_numbers`;
    private String sim_number_name;

    public Sim(String sim_number_name) {
        this.sim_number_name = sim_number_name;
    }

    public String getSim_number_name() {
        return sim_number_name;
    }
    
}
