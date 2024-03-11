/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ultil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;



/**
 *
 * @author ngotr
 */
public class JwtUtil {
     private static final String SECRET_KEY = "123456789080703xhkfdjfir"; 
     public static String generateToken(String username,String email,String firstname,String lastname,String address,String rolename) {
        return Jwts.builder()
                .setSubject(username)
                .claim("username", username)
                .claim("email", email)
                .claim("firstname", firstname)
                .claim("lastname", lastname)
                .claim("address", address)
                .claim("rolename", rolename)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+3600000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public static Claims parseToken(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }
}
