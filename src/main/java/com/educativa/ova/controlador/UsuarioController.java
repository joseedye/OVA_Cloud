package com.educativa.ova.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.educativa.ova.dao.UsuarioDao;
import com.educativa.ova.modelo.Usuario;
import com.educativa.ova.util.JWTUtil;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuariodao;

    @Autowired
    JWTUtil jwtUtil;

    @RequestMapping(value = "/t")
    public List<Usuario> GetUsuarios() {


        return usuariodao.getUsuarios();


    }

    private boolean validartoken(String token){

        String usuarioid = jwtUtil.getKey(token);
        if(usuarioid==null){
            return false;
        }
        return true;
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void DeleteUsuarios(@RequestHeader(value = "autorizacion") String token,
                               @PathVariable Long id) {

        if(validartoken(token)){
            usuariodao.eliminar(id);
        }
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void CrearUsuario(@RequestBody Usuario usuario) {
        usuariodao.crear(usuario);
    }




}
