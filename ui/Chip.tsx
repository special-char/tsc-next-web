
import '@/styles/chip.css'
import Icon from './Icon';
type chip = {
    id: number;
    icon: string;
    text: string;
};
type Props = {
    data: [chip];
};

const Chip = ({ data }: Props) => {
    return (
        data.map(chip => {
            return (
                <>
                    <span key={chip.id} className="custom-chip">
                        <Icon className='custom-chip__icon' name={chip.icon} />
                        <span className="custom-chip__text">{chip.text}</span>
                    </span>
                </>
            );
        })

    );
};

export default Chip;
