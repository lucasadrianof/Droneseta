package br.udesc.ceavi.dsw.droneseta.service;

import br.udesc.ceavi.dsw.droneseta.model.entity.Produto;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
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
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void edit(@PathParam("id") Long id, Produto entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Produto find(@PathParam("id") Long id) {
        return super.find(id);
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
    
    @GET
    @Path("maisvendidos")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Produto> getMaisVendidos() {
        Query query = em.createQuery(""
            + "SELECT p.descricao, p.preco, p.tamanho, p.urlFoto FROM Produto p GROUP BY p.descricao, p.preco, p.tamanho, p.urlFoto", Produto.class);
        query.setMaxResults(5);
        
        return query.getResultList();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
}