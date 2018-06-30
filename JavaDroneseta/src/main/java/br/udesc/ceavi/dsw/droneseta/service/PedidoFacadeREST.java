package br.udesc.ceavi.dsw.droneseta.service;

import br.udesc.ceavi.dsw.droneseta.model.entity.Pedido;
import br.udesc.ceavi.dsw.droneseta.model.entity.Produto;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
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
 * Serviço rest de pedidos
 * @author lucas.adriano
 */
@Stateless
@Path("pedidos")
public class PedidoFacadeREST extends AbstractFacade<Pedido> {

    @PersistenceContext(unitName = "br.udesc.ceavi.dsw_droneseta_war_1.0-SNAPSHOTPU")
    private EntityManager em;

    public PedidoFacadeREST() {
        super(Pedido.class);
    }

    @POST
    @Override
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Pedido entity) {
        super.create(entity);
        atualizaSituacaoProdutosPedido(entity);
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void edit(@PathParam("id") Long id, Pedido entity) {
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
    public Pedido find(@PathParam("id") Long id) {
        return super.find(id);
    }
    
    @POST
    @Path("confirmarpagamento")
    @Consumes(MediaType.APPLICATION_JSON)
    public void confirmarPagamento(Pedido entity) {
        Pedido pedidoAConfirmar = find(entity.getId());
        pedidoAConfirmar.setSituacao(2);
        em.merge(pedidoAConfirmar);
    }

    @GET
    @Override
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pedido> findAll() {
        return super.findAll();
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
    
    /**
     * Atualiza a situação dos produtos relacionados ao pedido
     */
    private void atualizaSituacaoProdutosPedido(Pedido pedido) {
        EntityManagerFactory emf    = javax.persistence.Persistence.createEntityManagerFactory("br.udesc.ceavi.dsw_droneseta_war_1.0-SNAPSHOTPU");
        EntityManager entityManager = emf.createEntityManager();
        
        for (Produto produto : pedido.getProdutos()) {
            Produto produtoAlt = entityManager.find(Produto.class, produto.getId());
        
            produtoAlt.setDisponivel(false);
            entityManager.merge(produtoAlt);
        }
    }
}