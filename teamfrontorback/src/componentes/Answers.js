import React from 'react'

import './style.scss';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Answers = ()  => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>
            1 - Prefiro fotografar lugares do que ler livros:
            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                resposta 1
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>2. Acho melhor aplicativos/sites que sejam Lindos do que Rápido</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            resposta 2
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>
            3. Me enxergo mais como artista do que como uma engenheira
            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            resposta 3
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>4. Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividades</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             resposta 4
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>
            5. Prefiro História ou Ciências a Matemática ou Química
            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                resposta 5
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  export default Answers