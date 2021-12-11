package com.educativa.ova.dao;

import com.educativa.ova.modelo.Recursos;

import java.util.List;

public interface RecursosDao {


    List<Recursos> getRecursos();

    String getUrl(Long id);

    String getText(Long id);

}
