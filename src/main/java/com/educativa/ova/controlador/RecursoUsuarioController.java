package com.educativa.ova.controlador;

import com.educativa.ova.dao.RecursoUsuarioDao;
import com.educativa.ova.modelo.RecursoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecursoUsuarioController {

    @Autowired
    private RecursoUsuarioDao recursousuario;

    @RequestMapping(value = "/ru/{iduser}/{idrecurso}")
    public List<RecursoUsuario> GetRecursos(@PathVariable Long iduser,@PathVariable Long idrecurso) {
        return recursousuario.getRecursosUsuario( iduser, idrecurso);
    }

    @RequestMapping(value = "/ru/{iduser}")
    public List<RecursoUsuario> GetRecursos(@PathVariable Long iduser) {
        return recursousuario.getRecursosUsuario( iduser);
    }

    //modifica las actividades vistas
    @RequestMapping(value = "/ruv/{iduser}/{idrecurso}")
    public String guardarvisto(@PathVariable Long iduser,@PathVariable Long idrecurso){
        return recursousuario.guardarvisto( iduser, idrecurso);
    }





}
