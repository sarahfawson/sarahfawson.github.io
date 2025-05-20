var gridmap = {};

d3.csv( 'map.csv',
    d => ({ code: d.code, x: +d.x, y: +d.y }),
    m => {
      gridmap = d3.map( m, d => d.code );
      d3.csv( 'incarceration_rate.csv', parseRow, ready );
    });

function parseRow (d) {
  return { 'state': d.state,
           'code': d.code,
           'year': +d.year
        //    'value': +d.value 
        };
}

function ready ( data ) {

  data = data.filter( d => gridmap.has( d.code ) );
  
  const margin = { top: 40, bottom: 10, left: 120, right: 20 };
  const width = 750 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;
  
  var 
//   margin = { top: 10, right: 10, bottom: 10, left: 10 },
//       html = document.documentElement,
//       width = html.clientWidth - margin.left - margin.right,
//       height = html.clientHeight - margin.top - margin.bottom,

      ry = d3.scale.ordinal()
          .domain( gridmap.values().map( d => d.y ).sort( d3.ascending ) )
          .rangeBands([ 0, height ], 0.07),
      rx = d3.scale.ordinal()
          .domain( gridmap.values().map( d => d.x ).sort( d3.ascending ) )
          .rangeBands([ 0, width ], 0.05),

      y = d3.scale.linear()
          .domain([ 0, d3.max( data, d => d.value ) ])
          .range([ ry.rangeBand(), 0 ])
      x = d3.scale.linear()
          .domain( d3.extent( data, d => d.year ) )
          .range([ 0, rx.rangeBand() ]);

  var countries = d3.nest()
      .key( d => d.code )
      .entries( data )
      .map( d => {
        var pos = gridmap.get( d.key );
        d.title = d.values[0].code;
        d.x = pos.x;
        d.y = pos.y;
        return d;
      })
      .filter( Boolean );

  var svg = d3.select("#map").append("svg")
      .attr('width', width + margin.left + margin.right )
      .attr('height', height + margin.top + margin.bottom )
        .append( 'g' )
      .attr('transform', `translate(${[ margin.left, margin.top ]})`);

  var country = svg.selectAll( 'g' ).data(countries).enter()
    .append( 'g' )
      .attr( 'transform', d => `translate(${[ rx( d.x ), ry( d.y ) ]})` );

  country.append( 'rect' )
      .attr( 'width', rx.rangeBand() )
      .attr( 'height', ry.rangeBand() )
      .style( 'stroke', 'none' )
      .style( 'fill', '#d8dcdf' );

  var line = d3.svg.line()
      .defined( d => d.value )
      .x( d => x( d.year ) )
      .y( d => y( d.value ) );

  var area = d3.svg.area()
      .defined( line.defined() )
      .x( line.x() )
      .y1( line.y() )
      .y0( y(0) );

  country.append( 'path' )
      .attr( 'd', d => line( d.values ) )
      .style( 'stroke-width', 1.5 )
      .style( 'stroke', '#fff' )
      .style( 'fill', 'none' );

//   country.append( 'path' )
//       .attr( 'd', d => area( d.values ) )
//       .style( 'stroke', 'none' )
//       .style( 'fill', '#9ab' );

  country.append( 'text' )
      .attr( 'class', 'country' )
      .attr( 'x', 4 )
      .attr( 'y', 0 )
      .attr( 'dx', 0 )
      .attr( 'dy', '1em' )
      .style( 'fill', 'rgba(0,0,0,.75)' )
      .text( d => d.title || d.key );
}