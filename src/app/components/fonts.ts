import { Poppins, Nunito } from 'next/font/google';

export const poppins_reg = Poppins({weight: "300", style: "normal", subsets: ['latin']}); 
export const poppins_bold = Poppins({weight: "500", style: "normal", subsets: ['latin']}); 

export const nunito_reg = Nunito({subsets: ['latin']});