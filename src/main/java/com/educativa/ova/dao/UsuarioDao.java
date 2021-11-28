package com.educativa.ova.dao;

import com.educativa.ova.modelo.Usuario;
import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();



    void eliminar(Long id);

    void crear(Usuario usuario);

    Usuario verificar (Usuario usuario);
}
