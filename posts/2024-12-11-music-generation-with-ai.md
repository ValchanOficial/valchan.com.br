---
date: 2024-12-11
title: "Gerando música com inteligência artificial"
description: "Projeto feito na plataforma da Educative.io"
category: "AI"
image: "/assets/img/cover/cover2.png"
---

Ultimamente venho buscando aprofundar meus conhecimentos sobre inteligência artificial e recentemente, fiz o projeto de geração de música utilizando a AI na plataforma Educative.io. Foi um projeto bastante interessante, nele usei o framework AudioCraft da MetaAI para gerar músicas de diversos gêneros!

### Informações

- **torchaudio**: Esta biblioteca será utilizada para processamento de áudio;
- **audiocraft**: Esta biblioteca fornecerá modelos de geração de música;
- **MusicGen**: Este modelo gerará música conforme o prompt fornecido;
- **Audio**: Este módulo exibirá a saída de áudio;
- **Textarea**: Este módulo será utilizado para exibir uma área de texto semelhante ao HTML;
- **Button**: Este módulo será utilizado para exibir um botão semelhante ao HTML.

### Veja o que podemos fazer com poucas linhas de código!

Em um arquivo.ipynb:

- Primeiro, faço a importação das bibliotecas e módulos necessários

```python
import torchaudio
import audiocraft
from audiocraft.models import MusicGen
from IPython.display import Audio
from ipywidgets import Textarea
from ipywidgets import Button
```

- Em seguida, carrego um modelo pré-treinado para geração de música
- Modelos disponíveis: https://github.com/facebookresearch/audiocraft/blob/main/docs/MUSICGEN.md#api

```python
model = MusicGen.get_pretrained('facebook/musicgen-small')
```

- Defino a duração da música a ser gerada

```python
model.set_generation_params(duration=8)
```

- Crio uma área de texto para informar o prompt da música

```python
description = Textarea(value='', placeholder='Give a music prompt', disabled=False, rows=4)
```

- Adiciono um botão para gerar a música

```python
generate_button = Button(description="Generate Tune")
```

- Crio a função de geração de música

```python
def generate_tune(event):
    # Gero a música com base no prompt fornecido
    results = model.generate([description.value])
    # Obtenho a taxa de amostragem do modelo (em Hz)
    sampling_rate =  model.sample_rate
    # Exibo a saída de áudio
    display(Audio(results[0].cpu().numpy(), rate=sampling_rate))
```

- Conecto o evento de clique do botão à função de geração de música

```python
generate_button.on_click(generate_tune)
```

- Deixo exibindo a área de texto e o botão

```python
display(description)
display(generate_button)
```

**_Fontes:_**

- <a href="https://www.educative.io/projects/generating-new-music-with-artificial-intelligence" target="_blank" rel="noopener noreferrer">Generating New Music with Artificial Intelligence</a>

- <a href="https://github.com/facebookresearch/audiocraft?tab=readme-ov-file#audiocraft" target="_blank" rel="noopener noreferrer">MetaAI - AudioCraft</a>
