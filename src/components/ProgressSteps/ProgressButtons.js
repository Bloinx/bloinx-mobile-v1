import React from 'react';
import { View ,TouchableOpacity, Text} from 'react-native';
import { stylesInicioSesion } from '../../modules/login/themeLogin/loginTheme';

const ProgressButtons = props => (

  <View style={[stylesInicioSesion.contenedorButton, stylesInicioSesion.contenedorButtonPositionAB]}>
    <View
            style={[stylesInicioSesion.button,
              ( props.disabledBtn )  ?  stylesInicioSesion.colorButtonDisabled : stylesInicioSesion.colorButtonActive ]}
    >
        <Text style= {[stylesInicioSesion.textoButton,
                    stylesInicioSesion.colorLetraActive ]}>
        {props.renderNextButton()}</Text>
    </View>
  </View>
);

export default ProgressButtons;