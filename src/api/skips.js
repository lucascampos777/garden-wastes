import axios from "axios"

export const fetchSkips = async () => {
    try {
        const res = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
        return res.data
    } catch (error) {
        console.log(error);
    }
}