/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import dal.UsersDAO;
import dal.UsersDAOImpl;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
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
         response.setContentType("application/json");
         response.setCharacterEncoding("UTF-8");
         response.addHeader("Access-Control-Allow-Origin", "*"); // hoặc bạn có thể chỉ định origin cụ thể
         response.addHeader("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD");
         response.addHeader("Access-Control-Allow-Headers", "Content-Type");
         String username = request.getParameter("username");
         String password = request.getParameter("password");

//         Authenticate user
        Users authenticatedUser = new UsersDAOImpl().loginUsers(username, password);
//        response.getWriter().write(new Gson().toJson(authenticatedUser.toString()));
        if (authenticatedUser != null) {
            // Authentication successful, you may generate a JWT token here if needed
             String jwtToken;
             jwtToken = JwtUtil.generateToken(username,authenticatedUser.getEmail(),authenticatedUser.getFirstname(),authenticatedUser.getLastname(),authenticatedUser.getAddress(),authenticatedUser.getRolename());
//            response.getWriter().write(jwtToken);
            response.getWriter().write(jwtToken );
        } else {
            // Authentication failed
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\": \"Login failed\"}");
        }
        response.getWriter().write("hello");
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
