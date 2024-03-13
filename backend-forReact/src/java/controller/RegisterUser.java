/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import dal.UsersDAOImpl;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import model.Users;

/**
 *
 * @author ngotr
 */
public class RegisterUser extends HttpServlet {

  
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*"); // hoặc bạn có thể chỉ định origin cụ thể
        response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, HEAD");
        response.addHeader("Access-Control-Allow-Headers", "Content-Type");
        
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        try {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } finally {
            reader.close();
        }

        // Dữ liệu ở đây là chuỗi JSON, bạn có thể chuyển đổi nó thành đối tượng Java
        String requestData = sb.toString();
        ObjectMapper objectMapper = new ObjectMapper();
        Users userRegister = objectMapper.readValue(requestData, Users.class);
        UsersDAOImpl user = new UsersDAOImpl();
        user.registerUsers(userRegister.getUsername(), userRegister.getPassword(), userRegister.getEmail(),"USER");
//        response.getWriter().write(new Gson().toJson(userRegister));
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
