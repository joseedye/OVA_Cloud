package com.educativa.ova.dao;

import com.educativa.ova.modelo.Recursos;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class RecursosDaoImplements  implements RecursosDao{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Recursos> getRecursos() {
        String query = "FROM Recursos";

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public String getUrl(Long id) {
        Recursos r = entityManager.find(Recursos.class, id);
        return r.getUrl();
    }

    @Override
    public String getText(Long id) {
        Recursos r = entityManager.find(Recursos.class, id);
        return r.getText();
    }

}
