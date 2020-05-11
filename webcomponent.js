(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
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
