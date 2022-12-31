import { React, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from './tarefa.module.css';

function Tarefa() {

    // hook para valor digitado no input
    const [novaTarefa, setNovaTarefa] = useState('');
    // hook para salvar tarefas em um array
    const [itemTarefa, setItemTarefa] = useState([]);
    // hook array auxiliar para tarefas
    const [checked, setChecked] = useState([]);

    // Pegar valores do campo input
    function handleInput(event) {
        const tarefa = event.target.value;
        setNovaTarefa(tarefa);
    }
    // Adicionar tarefa
    function adicionarTarefa() {
        setItemTarefa(prevValues => {
            // Se nova tarefa não for vazia, retorne os valores antigos e o novo.
            if(novaTarefa !== '') return [...prevValues, novaTarefa];
             // Se nova tarefa for vazia apenas, retorne o que já existe no array.
            else return [...prevValues];
          })
          // Deixe o campo com uma string vazia.
          setNovaTarefa("");
    }
    // Manipular checkbox
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    }
    // Deletar tarefa
    const handleDelete = () => {
        setItemTarefa(itemTarefa.filter(item => !checked.includes(item))); // Corrigir pois está deletando itens repetidos.
        setChecked([]) // Limpa array de selecionados
    }


    return (
        <tarefa className={styles.generalStyle}>
            <div className={styles.containerTop}>
                <Row>
                    <Col>
                    <div className={styles.margemLateral + ' mb-3'}>
                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                            <Form.Label>ADICIONAR TAREFA</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Insira uma tarefa:" 
                                onChange={handleInput}
                                value={novaTarefa}
                            />
                        </Form.Group>
                        <ButtonGroup>
                            <Button variant="outline-primary" onClick={adicionarTarefa}>Adicionar</Button>
                            <Button variant="outline-danger" onClick={handleDelete}>Excluir</Button>
                        </ButtonGroup>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.containerBot}>
                <Row>
                    <Col>
                        { itemTarefa.map((tarefa, index) => (
                            <div className={styles.tarefaContainer}>
                                <div className={styles.tarefa}>
                                    <Form.Check 
                                        onChange={handleCheck} 
                                        id={index} 
                                        key={tarefa+'_'+index}
                                        value={tarefa}
                                        label={tarefa}>
                                    </Form.Check>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
        </tarefa>
    );
}

export default Tarefa;
