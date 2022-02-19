import react from "react";
import JumbotronComponet from "../components/jumbotron/JumbotronComponet";
import jumboData from "../fixtures/jumbo.json"


function JumbotronContainer() {
  return (
    <JumbotronComponet.Container>
      {jumboData.map((item)=>(
        <JumbotronComponet key={item.id}  direction={item.direction}>
          <JumbotronComponet.Pane>
            <JumbotronComponet.Title>{item.title}</JumbotronComponet.Title>
            <JumbotronComponet.SubTitle>{item.subTitle}</JumbotronComponet.SubTitle>
          </JumbotronComponet.Pane>
          <JumbotronComponet.Pane>
            <JumbotronComponet.Image src={item.image} alt={item.alt}></JumbotronComponet.Image>
          </JumbotronComponet.Pane>
        </JumbotronComponet>
      ))}
    </JumbotronComponet.Container>
    );
}

export default JumbotronContainer;
