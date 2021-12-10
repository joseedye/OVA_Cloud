package com.educativa.ova.dao;

import com.educativa.ova.modelo.RecursoUsuario;
import com.educativa.ova.modelo.Recursos;

import java.util.List;

public interface RecursoUsuarioDao {

    List<RecursoUsuario> getRecursosUsuario(Long iduser,Long idrecurso);

    List<RecursoUsuario> getRecursosUsuario(Long iduser);

    String guardarvisto(Long iduser,Long idrecurso);

}
