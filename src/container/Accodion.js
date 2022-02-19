import react from "react";
import Accordion from "../components/accordion/Accordion";
import faq from '../fixtures/faqs.json'
import Search from "../components/search/Search";

function AccordionContainer() {
    return(  
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faq.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            

            <Search>
                <Search.Input placeholder="Email address"/>
                <Search.Button>Try now</Search.Button>
                <Search.Text>Ready to watch? Enter your email to create or restart your membership</Search.Text>
            </Search>  
        </Accordion>
    )}

export default AccordionContainer;