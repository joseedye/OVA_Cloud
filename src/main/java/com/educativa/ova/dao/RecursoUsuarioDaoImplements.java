package com.educativa.ova.dao;


import com.educativa.ova.modelo.RecursoUsuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class RecursoUsuarioDaoImplements implements RecursoUsuarioDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<RecursoUsuario> getRecursosUsuario(Long iduser,Long idrecurso) {
        String query = "FROM RecursoUsuario WHERE iduser ="+iduser+" AND idrecurso ="+idrecurso;
        List<RecursoUsuario> r = entityManager.createQuery(query).getResultList();
        return r;

    }

    @Override
    public List<RecursoUsuario> getRecursosUsuario(Long iduser) {
        String query = "FROM RecursoUsuario WHERE iduser ="+iduser;
        List<RecursoUsuario> r = entityManager.createQuery(query).getResultList();
        return r;
    }

    @Override
    public String guardarvisto(Long iduser, Long idrecurso) {
        String query = "FROM RecursoUsuario WHERE iduser ="+iduser+"AND idrecurso="+idrecurso;
        List<RecursoUsuario> r = entityManager.createQuery(query).getResultList();

        if(r.isEmpty()){
            RecursoUsuario recursonuevo = new RecursoUsuario();
            recursonuevo.setIduser(iduser);
            recursonuevo.setIdrecurso(idrecurso);
            recursonuevo.setVista(1);
            entityManager.merge(recursonuevo);
        }else{
           r.get(0).setVista(1);
        }


        return r.toString();
    }
}
