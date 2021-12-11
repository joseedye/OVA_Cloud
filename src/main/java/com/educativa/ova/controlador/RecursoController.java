package com.educativa.ova.controlador;


import com.educativa.ova.dao.RecursosDao;
import com.educativa.ova.modelo.Recursos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecursoController {

    @Autowired
    private RecursosDao recursosdao;

    //devuelve la lista de recursos
    @RequestMapping(value = "/r")
    public List<Recursos> GetRecursos() {
        return recursosdao.getRecursos();
    }

    //devuelve la url de un recurso en especial
    @RequestMapping(value = "/respecial/{idrec}")
    public String geturl( @PathVariable Long idrec){
        return recursosdao.getUrl(idrec);
    }

    //devuelve el texto de un recurso en especial
    @RequestMapping(value = "/respecialt/{idrec}")
    public String getText( @PathVariable Long idrec){
        return recursosdao.getText(idrec);
    }

}
