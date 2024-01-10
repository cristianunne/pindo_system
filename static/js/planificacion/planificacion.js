
function initGanttByRodal(categorias, eventos_planificacion, name_rodal, element)
{

  
    let data_ = getDataForGanttByRodal(eventos_planificacion, name_rodal);

   
    let name = element != null ? element.toString() : 'gantt';
    

    let width_parent = name != 'gantt' ? document.getElementById(name).offsetWidth - 75 : document.getElementById(name).offsetWidth;

    let timeline = TimelinesChart()('#gantt')
      .zScaleLabel('My Scale Units')
      .zQualitative(true)
      .data(data_)
      .width(width_parent)
      .topMargin(35)
      .onSegmentClick(e => {
        console.log(e);
      })
      .segmentTooltipContent(e => {


        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const inicio =  new Date(e.timeRange[0].toString()).toLocaleDateString('es-AR', options)
        const fin =  new Date(e.timeRange[1].toString()).toLocaleDateString('es-AR', options)

        let status =  e.data.status ? '<strong style="color: red;">Finalizado</strong>' : '<strong style="color: #30FF24;">Planificado</strong>';

        
        let label = `<h5>Intervención: ${e.val.toString()} </h5> <h5>Fecha de Inicio: ${inicio} </h5> <h5>Fecha de Fin: ${fin} </h5>
            
                <h5>Estado: ${status} </h5>`;

        return label;
        
      })
      .maxLineHeight(50);

   
    createLegendByCategorias(timeline, categorias);


}

function getDataForGanttByRodal(eventos_planificacion, name_rodal)
{

    console.log(eventos_planificacion);
    
    console.log(name_rodal);

    let data_ = []

    for (item of eventos_planificacion) {

        let obj = 
            {
                label: "",
                data: [
                {
                    timeRange: [new Date(item.fields.date_start.toString()), new Date(item.fields.date_end.toString())],
                    val: item.fields.title.toString(),
                    status: item.fields.status
                }
                ]
             };

        data_.push(obj);
       
 
     }

     let data_final = [{

        group : name_rodal.toString(),
        data : data_

     }];

     return data_final;


}

function getDataForGanttByRodalGeneral(eventos_planificacion, name_rodal)
{


    let data_ = []

    let data_aux_data = [];

    for (item of eventos_planificacion) {

      let obj = 
              {
                
                timeRange: [new Date(item.date_start.toString()), new Date(item.date_end.toString())],
                val: item.title.toString(),
                status: item.status
                
                
             };

        data_aux_data.push(obj);
    }
       


     data_ = [{
      label : '',
      data : data_aux_data
     }]

     let data_final = {

        group : name_rodal.toString(),
        data : data_

     };

     //console.log('data fional');
     //console.log(data_final);

     return data_final;


}


function createLegendByCategorias(timeline, categorias)
{
    let domain = [];
    let range = [];

    for (item of categorias) {

     
       domain.push(item.fields.name);
       range.push(item.fields.color);

    }

    const valColorScale = d3.scaleOrdinal()
    .domain(domain)
    .range(range);

    timeline.zColorScale(valColorScale);


}


function createChart(datasets, label_dataset, dom_object, type_graph, title)
{

  const labels = [];
      const data_ = [];
      const colors = [];
      let suma_porcentaje = 0;
      let total_plantacion = 0;
      //creo los labels
      datasets.map((value, key) => {

        if(value.name != 'total_arboles')
        {
            labels.push(value.name);
            data_.push(value.porcentaje);
            colors.push(value.color);
            suma_porcentaje = suma_porcentaje + value.porcentaje;
        }
       
      })

      /*data_.push((100 - suma_porcentaje));
      colors.push('#0ca678');
      labels.push('Disponible');*/

     

      const ctx = document.getElementById(dom_object);

        const data = {
          labels: labels,
          datasets: [
            {
              label: label_dataset,
              data: data_,
              backgroundColor: colors
    
            }
          ]
        };

        const config = {
          type: type_graph,
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: title,
                font: {
                  size: 18
                },
                padding: {
                  top: 70
              }
              }
            }
          },
        };

      new Chart(ctx, config);

}

function createChartSuperficie(datasets, label_dataset, dom_object, type_graph, title)
{

  const labels = [];
      const data_ = [];
      const colors = [];
      let suma_porcentaje = 0;
      let total_plantacion = 0;
      //creo los labels
      datasets.map((value, key) => {

        if(value.category != 'plantacion' && value.category != 'sobrevivencia')
        {
            labels.push(value.name);
            data_.push(value.porc_superficie);
            colors.push(value.color);
            suma_porcentaje = suma_porcentaje + value.porcentaje;
        }
       
      })

      /*data_.push((100 - suma_porcentaje));
      colors.push('#0ca678');
      labels.push('Disponible');*/

     

      const ctx = document.getElementById(dom_object);

        const data = {
          labels: labels,
          datasets: [
            {
              label: label_dataset,
              data: data_,
              backgroundColor: colors
    
            }
          ]
        };

        const config = {
          type: type_graph,
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: title,
                font: {
                  size: 18
                },
                padding: {
                  top: 70
              }
              }
            }
          },
        };

      new Chart(ctx, config);

}


function initGanttGeneral(categorias, rodales, dom_element)
{
  let data_ = getDataGeneral(rodales);
  let name = dom_element != null ? dom_element.toString() : 'gantt';
  let width_parent = name != 'gantt' ? document.getElementById(name).offsetWidth - 80 : document.getElementById(name).offsetWidth;

  let timeline = TimelinesChart()('#gantt')
      .zScaleLabel('My Scale Units')
      .zQualitative(true)
      .data(data_)
      .width(width_parent)
      .topMargin(50)
      .rightMargin(10)
      .maxLineHeight(30);

  createLegendByCategorias(timeline, categorias);
  
}

function getDataGeneral(rodales)
{
  let data_final = []

  for (rod of rodales) {

    data_final.push(getDataForGanttByRodalGeneral(rod.eventos_planificacion, rod.cod_sap));
  
  }



  return data_final;

}
