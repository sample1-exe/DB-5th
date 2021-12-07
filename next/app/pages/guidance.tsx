import Header from '../components/header'
import Footer from '../components/footer'

export default function Guidance() {
    const title: string = "コース案内 | AIスマート工学コース";
    return (<>
        <div className="wrapper">
            <Header title={title} />

            <div className="grid grid-cols-1 p-8">
                <div className="border-b-4 border-black text-4xl mb-16">
                    コース案内
                </div>

                <div className="mb-8">
                    <div className="border-b-2 border-black text-3xl mb-2">
                        コースの特色
                    </div>
                    <div>
                        <p>
                            　電話がスマートフォンへ、時計がスマートウォッチへ変わったように、様々な「もの」がインターネットにつながりスマート化され進化しています。
                            これからの時代はAIやスマート化技術を活用することで、未来都市の「スマート東京」ができるでしょう。
                            <br />
                            　例えば、自動運転について考えてみましょう。
                            車などのモビリティに搭載されたカメラで撮影した映像データがAIへ送られます。
                            AIはその映像データと大量の蓄積データを照合し、最適なモータの動かし方を考え、スマートな運転を実現してくれます。
                            次世代のものづくりは、これまでの技術×AIにあり、個々のニーズ（欲求）に合ったきめ細かなサービスが実現され、人間中心の新しい未来社会が来るでしょう。
                            <br />
                            　AIスマート工学コースでは、AIを活用し、スマート化技術で「もの」をつくる技術者を育成します。
                            そのために、機械、電子工学をベースにデジタルで「もの」を「かたち」にする技術、「もの」同士を「つなげる」技術、「もの」を「動かす」技術、「AI」を「活用」する技術を実際に体験しながら学びます。
                        </p>
                    </div>
                </div>
                <div>
                    <div className="border-b-2 border-black text-3xl mb-2">
                        ポリシー
                    </div>
                    <ol className="list-decimal list-inside">
                        <li>
                            デジタルエンジニアリングの基礎となる力学や製図を学び、3D-CAD・CAM・CAEとその運用法について学習する。
                        </li>
                        <li>
                            スマート技術の基礎であるハードウエア、ソフトウエア、センサ、アクチュエータを学び、中核である組込システム、ロボティクス、ネットワークに関連する科目を学習する。
                        </li>
                        <li>
                            AIを活用するため、数理・データサイエンスに関する基礎科目を学び、機械学習等の技術を用いて、ものを動かす応用技術を学習する。
                        </li>
                        <li>
                            実験実習を通して、実践的なものづくりの基礎的技術や応用的技術を学習する。
                        </li>
                        <li>
                            ゼミナールや卒業研究を通して、創造力、プレゼンテーション力及び問題解決能力を養えるように学習する。
                        </li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}
