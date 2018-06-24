package br.udesc.ceavi.dsw.droneseta.service;

import br.udesc.ceavi.dsw.droneseta.model.entity.Produto;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * @author lucas.adriano
 */
@Stateless
@Path("produtos")
public class ProdutoFacadeREST extends AbstractFacade<Produto> {

    @PersistenceContext(unitName = "br.udesc.ceavi.dsw_droneseta_war_1.0-SNAPSHOTPU")
    private EntityManager em;

    public ProdutoFacadeREST() {
        super(Produto.class);
    }

    @POST
    @Override
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Produto entity) {
        super.create(entity);
    }

    @GET
    @Path("disponiveis")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Produto> findAllDisponiveis() {
        javax.persistence.criteria.CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        javax.persistence.criteria.CriteriaQuery cq = cb.createQuery();
        javax.persistence.criteria.Root root = cq.from(Produto.class);

        cq.select(root);
        cq.where(cb.equal(root.get("disponivel"), true)); //somente disponíveis = "true"
        System.out.println(cq);
        
        return getEntityManager().createQuery(cq).getResultList();
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}