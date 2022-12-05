import { useState, useRef, useEffect } from 'react';


export default function PaginaDownloadEx08() {
    const softwareObj = [{
        id: 1,
        nome: 'Audaces 4D',
        tamanhoDoArquivo: 464,
        downloaded: 0,
        isDownloading: false
    },
    {
        id: 2,
        nome: 'Audaces IDEA',
        tamanhoDoArquivo: 250,
        downloaded: 0,
        isDownloading: false
    }
    ]
    const [software, setSoftware] = useState(softwareObj)

    const intervalId = useRef();
    let i = 1;
    function iniciarDownload(key) {
        intervalId.current = setInterval(() => {
            setSoftware(() => software.map(item => {
                return item.id === key ? { ...item, downloaded: i, isDownloading: true } : item
            }))
            i = i + 1;
        }, 50)
    }

    useEffect(() => {
        software.map(item => {
            if (item.isDownloading && item.downloaded >= 100) {
                clearInterval(intervalId.current)
                item.isDownloading = false;
                item.downloaded = 0;

            }
        })
    }, [software])


    return (
        <div className='sistemas'>
            {software.map(item => (
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'margin': '0 auto', 'alignItems': 'center' }}>
                    <h4>{item.nome} - {item.isDownloading}</h4>
                    <progress value={item.downloaded} min="0" max="100"></progress>
                    <button key={item.id} onClick={() => iniciarDownload(item.id)}>Download</button>
                </div>
            ))}
        </div>
    )
}