package com.educativa.ova.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.educativa.ova.dao.UsuarioDao;
import com.educativa.ova.modelo.Usuario;
import com.educativa.ova.util.JWTUtil;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class Autenticacion {
    @Autowired
    private UsuarioDao usuariodao;

    @Autowired
    JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public Usuario login(@RequestBody Usuario usuario) {

        Usuario logeado = usuariodao.verificar(usuario);
        if(logeado!=null){

            String token =   jwtUtil.create(logeado.getId()+"",logeado.getEmail());
            return logeado;
            //return token;
        }else{
            return null;
        }

    }


}
