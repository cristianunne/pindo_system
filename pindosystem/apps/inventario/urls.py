from django.urls import path
from . import views

urlpatterns = [
   
    path('inventarios/inventarios-relevamientos/index', views.indexInventariosRelevamientos, name='inventarios-relevamientos-index'),
    path('inventarios/inventarios-relevamientos/add', views.addInventarioRelevamientos, name='inventarios-relevamientos-add'),
     path('inventarios/inventarios-relevamientos/edit/<int:idrelevamiento>/', views.editInventarioRelevamientos, name='inventarios-relevamientos-edit'),
     path('inventarios/inventarios-relevamientos/add-arboles/<int:idrelevamiento>/', views.addArbolesRelevamiento, name='inventarios-relevamientos-add-arboles'),
    path('inventarios/inventarios-relevamientos/numarb/<int:idrelevamiento>/', views.enterNumArboles, name='inventarios-relevamientos-numarb'),
    path('inventarios/inventarios-relevamientos/addtreespoda/<int:idrelevamiento>/<int:number_arboles>/', 
         views.addArbolesToInventarioRelevamientos, name='inventarios-relevamientos-addtrees-poda'),
    path('inventarios/inventarios-relevamientos/view-arboles/<int:idrelevamiento>/', 
         views.viewArbolesRelevamiento, name='inventarios-view-arboles'),

     path('inventarios/inventarios-relevamientos/parcels_numbers/<int:idrelevamiento>/', views.enterNumParcelas, 
          name='inventarios-relevamientos-numparc'),

     path('inventarios/inventarios-relevamientos/parcels_details/<int:idrelevamiento>/<int:number_parcels>/', 
          views.addParcelsDetails, name='inventarios-relevamientos-parcelas-details'),
     path('inventarios/inventarios-relevamientos/relevamiento-stats/<int:idrelevamiento>/', 
          views.viewStatsRelevamiento, name='inventarios-relevamientos-stats'),

     path('inventarios/inventarios-relevamientos/addtreesothers/<int:idrelevamiento>/<int:number_arboles>/', 
         views.addArbolesToInventarioRelevamientosOthers, name='inventarios-relevamientos-addtrees-others'),

     path('inventarios/inventarios-relevamientos/relevamientos-delete/<int:idrelevamiento>/', views.deleteRelevamiento, name='relevamientos-delete'),
       path('inventarios/inventarios-relevamientos/edit-treespoda/<int:idrelevamiento>/<int:idarbol>/', 
         views.editArbolesRelevamientoPoda, name='inventarios-relevamientos-edit-trees-poda'),
     
      path('inventarios/inventarios-relevamientos/arbol-poda-delete/<int:idarbol>/', 
           views.deleteArbolPoda, name='arbol-poda-delete'),
          
     path('inventarios/inventarios-relevamientos/add-parcela/<int:idrelevamiento>/', 
         views.addParcela, name='inventarios-relevamientos-add-parcela'),

     path('inventarios/inventarios-relevamientos/edit-parcela/<int:idrelevamiento>/<int:idparcela>/', 
         views.editParcela, name='inventarios-relevamientos-edit-parcela'),
     
     path('inventarios/inventarios-relevamientos/add-arboles-parcela/<int:idrelevamiento>/<int:idparcela>', 
         views.addArbolesByParcelaPoda, name='inventarios-relevamientos-add-arboles-parcela'),
     
     path('inventarios/inventarios-relevamientos/add-arboles-parcela-others/<int:idrelevamiento>/<int:idparcela>', 
         views.addArbolesByParcelaOthers, name='inventarios-relevamientos-add-arboles-parcela-others'),

     path('inventarios/inventarios-relevamientos/relevamiento-stats-print/<int:idrelevamiento>/', 
          views.printStatistics, name='inventarios-relevamientos-stats-print'),
]