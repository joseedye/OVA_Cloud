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

    @RequestMapping(value = "/r")
    public List<Recursos> GetRecursos() {

        return recursosdao.getRecursos();
    }


}
