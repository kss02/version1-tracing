
    function init() {

      // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
      // For details, see https://gojs.net/latest/intro/buildingObjects.html
      const $ = go.GraphObject.make;  // for conciseness in defining templates

      myDiagram =
        $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
          {
            initialAutoScale: go.Diagram.Uniform,  // an initial automatic zoom-to-fit
            contentAlignment: go.Spot.Center,  // align document to the center of the viewport
            
            "undoManager.isEnabled": true
          });

      // define each Node's appearance
      myDiagram.nodeTemplate =
        $(go.Node, "Auto",  // the whole node panel
          { locationSpot: go.Spot.Center  , selectable:false},
          // define the node's outer shape, which will surround the TextBlock
          $(go.Shape, "Circle",
            { fill: $(go.Brush, "Linear", { 0: "rgb(254, 201, 0)", 1: "rgb(254, 162, 0)" }), stroke: "black" }),
          $(go.TextBlock,
            { font: "bold 10pt helvetica, bold arial, sans-serif", margin: new go.Margin(4, 4, 3, 20) },
            new go.Binding("text", "text"))
        );

      // replace the default Link template in the linkTemplateMap
      myDiagram.linkTemplate =
        $(go.Link,  // the whole link panel
          // path animation works with these kinds of links too:
          //{ routing: go.Link.AvoidsNodes },
          //{ curve: go.Link.Bezier },
          $(go.Shape,  // the link shape
            { stroke: "black" }),
          $(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null }),
          $(go.Panel, "Auto",
          )
        );

      myDiagram.nodeTemplateMap.add("token",
        $(go.Part,
          { locationSpot: go.Spot.Center, layerName: "Foreground" },
          $(go.Shape, "Circle",
            { width: 12, height: 12, fill: "green", strokeWidth: 0 },
            new go.Binding("fill", "color"))
        ));

      // create the model for the concept map
      var nodeDataArray = [
        { key: "WN-LP01-03", text: "LP01" },
        { key: "WN-LP02-02", text: "LP02" },
        { key: "WN-LP03-02", text: "LP03" },
        { key: "WN-LP04-02", text: "LP04" },
        { key: "WN-LP05-02", text: "LP05" },
        { key: "WN-LP06-01", text: "LP06" },
        { key: "WN-LP07-01", text: "LP07" },
        { key: "WN-LP08-01", text: "LP08" },
        { key: "WN-LP09-01", text: "LP09" },
        { key: "WN-LP10-01", text: "LP10" },
        /*{ key: 11, text: "LP11" },
        { key: 12, text: "LP12" },
        { key: 13, text: "LP13" },
        { key: 14, text: "LP14" },
        { key: 15, text: "LP15" },
        { key: 16, text: "LP16" },
        { key: 17, text: "LP17" },
        { key: 18, text: "LP18" },
        { key: 19, text: "LP19" },
        { key: 20, text: "LP20" }*/

      ];
      /*var linkdata = [];
      var i = 0;
      for (var j = 0; j < 30; j++,i++) {
        linkdata.push({ from: keys[i].text, to: values[j].text});
      }*/

      var linkDataArray = [
        { from: "WN-LP01-03", to: "WN-LP02-02"},
        { from: "WN-LP02-02", to: "WN-LP03-02"},
        { from: "WN-LP02-02", to: "WN-LP04-02"},
        { from: "WN-LP02-02", to: "WN-LP08-01"},
        { from: "WN-LP02-02", to: "WN-LP07-01"},
        { from: "WN-LP02-02", to: "WN-LP10-01"},
        { from: "WN-LP02-02", to: "WN-LP12-01"},
        { from: "WN-LP04-02", to: "WN-LP05-02"},
        { from: "WN-LP04-02", to: "WN-LP06-01"},
        { from: "WN-LP04-02", to: "WN-LP07-01"},
        /*{ from: 4, to: 8},
        { from: 4, to: 9},
        { from: 5, to: 9},
        { from: 5, to: 11},
        { from: 7, to: 13},
        { from: 7, to: 14},
        { from: 7, to: 19},
        { from: 8, to: 15},
        { from: 8, to: 16},
        { from: 9, to: 17},
        { from: 11, to: 18},
        { from: 12, to: 19},
        { from: 17, to: 18},
        { from: 18, to: 20}*/
      ];
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

      initTokens();
    }
     function compute() {
                eel.expose(init);
                eel.dic();
            }



    function initTokens() {
      var oldskips = myDiagram.skipsUndoManager;
      myDiagram.skipsUndoManager = true;
      myDiagram.model.addNodeDataCollection([
        { category: "token", at: 1, color: "green" },
        { category: "token", at: 2, color: "blue" },
        { category: "token", at: 4, color: "yellow" },
        { category: "token", at: 5, color: "purple" },
        { category: "token", at: 7, color: "red" },
        { category: "token", at: 8, color: "black" },
        { category: "token", at: 9, color: "green" },
        { category: "token", at: 11, color: "blue" },
        { category: "token", at: 12, color: "yellow" },
        { category: "token", at: 17, color: "purple" },
        { category: "token", at: 18, color: "red" }
      ]);
      myDiagram.skipsUndoManager = oldskips;
      window.requestAnimationFrame(updateTokens);
    }

    function updateTokens() {
      var oldskips = myDiagram.skipsUndoManager;
      myDiagram.skipsUndoManager = true;  // don't record these changes in the UndoManager!
      var temp = new go.Point();
      myDiagram.parts.each(token => {
        var data = token.data;
        if (!data) return;
        var at = data.at;
        if (at === undefined) return;
        var from = myDiagram.findNodeForKey(at);
        if (from === null) return;
        var frac = data.frac;
        if (frac === undefined) frac = 0.0;
        var next = data.next;
        var to = myDiagram.findNodeForKey(next);
        if (to === null) {  // nowhere to go?
          positionTokenAtNode(token, from);  // temporarily stay at the current node
          data.next = chooseDestination(token, from);  // and decide where to go next
        } else {  // proceed toward the "to" port
          var link = from.findLinksTo(to).first();
          if (link !== null) {
            token.location = link.path.getDocumentPoint(link.path.geometry.getPointAlongPath(frac, temp));
          } else {  // stay at the current node
            positionTokenAtNode(token, from);
          }
          if (frac >= 1.0) {  // if beyond the end, it's "AT" the NEXT node
            data.frac = 0.0;
            data.at = next;
            data.next = undefined;  // don't know where to go next
          } else {  // otherwise, move fractionally closer to the NEXT node
            data.frac = frac + 0.01;
          }
        }
      });
      myDiagram.skipsUndoManager = oldskips;
      window.requestAnimationFrame(updateTokens);
    }

    // determine where to position a token when it is resting at a node
    function positionTokenAtNode(token, node) {
      // these details depend on the node template
      token.location = node.position.copy().offset(4 + 6, 5 + 6);
    }

    function chooseDestination(token, node) {
      var dests = new go.List().addAll(node.findNodesOutOf());
      if (dests.count > 0) {
        var dest = dests.elt(Math.floor(Math.random() * dests.count));
        return dest.data.key;
      }
      var arr = myDiagram.model.nodeDataArray;
      // choose a random next data object that is not a token and is not the current Node
      var data = null;
      while (data = arr[Math.floor(Math.random() * arr.length)],
        data.category === "token" || data === node.data) { }
      return data.key;
    }
    window.addEventListener('DOMContentLoaded', init);
