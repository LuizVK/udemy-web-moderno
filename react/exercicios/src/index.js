import React from 'react'
import { createRoot } from 'react-dom/client'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
)