import skin from "../models/skin_.glb"

const Dna = () => {
    return (
        <div>
            <model-viewer id="modview" src={skin} camera-controls>
            </model-viewer>
            <model-viewer id="modview" src={skin} camera-controls>
            </model-viewer>
        </div>
    );
}
export default Dna;