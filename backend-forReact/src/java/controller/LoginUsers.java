/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import dal.UsersDAO;
import dal.UsersDAOImpl;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import model.Users;
import ultil.JwtUtil;

/**
 *
 * @author ngotr
 */
public class LoginUsers extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
   protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    response.addHeader("Access-Control-Allow-Origin", "*");
    response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, HEAD");
    response.addHeader("Access-Control-Allow-Headers", "Content-Type");

    try (BufferedReader reader = request.getReader()) {
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append('\n');
        }
        String requestData = sb.toString();
        ObjectMapper objectMapper = new ObjectMapper();
        Users user = objectMapper.readValue(requestData, Users.class);

        String username = user.getUsername();
        String password = user.getPassword();


        Users authenticatedUser = new UsersDAOImpl().loginUsers(username, password);

        if (authenticatedUser != null) {
            // Uncomment this section after verifying JwtUtil.generateToken
            String jwtToken = JwtUtil.generateToken(username, authenticatedUser.getEmail(), authenticatedUser.getFirstname(), authenticatedUser.getLastname(), authenticatedUser.getAddress(), authenticatedUser.getRolename());
            JsonObject jwtTokenJson = new JsonObject();
            jwtTokenJson.add("token",new Gson().toJsonTree(jwtToken));
            response.getWriter().write(jwtTokenJson.toString());
        } else {
//            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\": \"Login failed\"}");
        }
    } catch (IOException e) {
        // Handle IO exception
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        response.getWriter().write("Error processing the request");
        e.printStackTrace(); // Add this line for debugging
    }
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
