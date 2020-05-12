(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
<html>
    <head>
        <title>penis</title>
    </head>
    <body>
        <svg width="2000" height="2000">
        <!--Creating a circle-->
   <circle cx="80" cy="80" r="50" fill="pink">
   <!--Animate this one-->
   <animate attributeName="cx" from="80" to="110"
      dur="0.25s" fill="freeze" repeatCount="indefinite"/>
      </circle>
      <!--Creating a rectangle-->
   <rect width="250" height="100" x="80" y="80" fill="pink" stroke="round" style="stroke-linecap:round">
   <!--Animate this rectangle-->
   <animate attributeName="x" from="80" to="110"
      dur="0.25s" fill="freeze" repeatCount="indefinite"/>
    </rect> 
    <!--Creating another circle-->
    <circle cx="80" cy="180" r="50" fill="pink">
    <!--Animate another one-->
    <animate attributeName="cx" from="80" to="110"
      dur="0.25s" fill="freeze" repeatCount="indefinite"/>
      </circle>
      <!--Creating last circle-->
    <circle cx="330" cy="130" r="50" fill="pink">
    <!--Animate last one-->
    <animate attributeName="cx" from="330" to="360"
      dur="0.25s" fill="freeze" repeatCount="indefinite"/>
    </circle>
    <!--Creating first line-->
    <line x1="300" y1="80" x2="300" y2="180" style="stroke:#000; stroke-width:5">
    <!--Animate this line-->
    <animate attributeName="x1" from="300" to="330"
    dur="0.25s" fill="freeze" repeatCount="indefinite"/> 
    <animate attributeName="x2" from="300" to="330"
    dur="0.25s" fill="freeze" repeatCount="indefinite"/>
    </line>
    <!--Creating main line-->
    <line x1="340" y1="130" x2="380" y2="130" style="stroke:#000; stroke-width:5">
    <!--Animate main line-->
    <animate attributeName="x1" from="340" to="370"
    dur="0.25s" fill="freeze" repeatCount="indefinite"/> 
    <animate attributeName="x2" from="380" to="410"
    dur="0.25s" fill="freeze" repeatCount="indefinite"/>
    </line>
</svg>
    </body>
</html>

    `;

    customElements.define('com-sap-sample-big-cock2', class HelloWorld extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this._tagContainer;
            this._tagType = "h1";
            this._tagText = "Hello World_late_night_test";

	this.data = [5,10,15,20,25]
      this.spaceCircles = [30,70,110,150,190];
      this.width = '500'; 
      this.height = '500';
      this._tagType = "h1";
      // this.svg = d3.select("body").append("svg")
      //     .attr("width", this.width)
      //     .attr("height", this.height).attr("id","testSVG").append("circle")
      //     .attr("cx", 350)
      //     .attr("cy", 100)
      //     .attr("r", 30)
      //     .attr("fill", "pink")
      //     .attr("opacity", 0.4);
      // this.circles;

      
      this.bodySelection = d3.select("body");
 
      this.svgSelection = this.bodySelection.append("svg")
                                          .attr("width",500)
                                          .attr("height",500)
                                          .style("border", "1px solid black");
  
      this.circles = this.svgSelection.selectAll("circle")
                                  .data(this.data)
                                  .enter()
                                  .append("circle"); 
        
      this.circleAttributes = this.circles
                                  .attr("cx", function (d) { return d * 10; })
                                  .attr("cy", function (d) { return d * 10; })
                                  .attr("r", 15)
                                  .style("fill", function(d) {
                                    var returnColor;
                                    if (d === 25) { returnColor = "red";
                                      } else if (d === 20) { returnColor = "purple";
                                      } else if (d === 15) { returnColor = "yellow";
                                      } else if (d === 10) { returnColor = "pink";
                                      } else if (d === 5)  { returnColor = "blue"; }
                                      return returnColor;
                                    });		
			
			
	            //Adding event handler for click events
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
            });
		}
	    
	  

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();       
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        //Getters and Setters
        get widgetText() {
            return this._tagType;
        }

        set widgetText(value) {
            this._tagText = value;
        }
	get widgetText() {
    return this._tagType;
}

set widgetText(value) {
    this._tagText = value;
}    
	
        // End - Getters and Setters

        redraw(){
            if (this._tagContainer){
                this._tagContainer.parentNode.removeChild(this._tagContainer);
            }

            var shadow = window.getSelection(this._shadowRoot);
            this._tagContainer = document.createElement(this._tagType);
            var theText = document.createTextNode(this._tagText);    
            this._tagContainer.appendChild(theText); 
            this._shadowRoot.appendChild(this._tagContainer);
        }
    
    
    });
        
})();
