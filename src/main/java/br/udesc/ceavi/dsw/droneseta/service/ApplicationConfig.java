package br.udesc.ceavi.dsw.droneseta.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 * Configuração das páginas rest
 * @author lucas.adriano
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(br.udesc.ceavi.dsw.droneseta.service.EnderecoFacadeREST.class);
        resources.add(br.udesc.ceavi.dsw.droneseta.service.ProdutoFacadeREST.class);
        resources.add(br.udesc.ceavi.dsw.droneseta.service.UsuarioFacadeREST.class);
    }
}