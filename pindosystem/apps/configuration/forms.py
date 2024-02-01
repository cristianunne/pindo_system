from django import forms
from configuration.models import CapasBases, CategoriasCapas, ServiciosIDEConfig, TileLayerWMS

class CapasBasesForm(forms.ModelForm):

    class Meta:
        model = CapasBases
        fields = ['name', 'attribution', 'urlservice', 'subdomain', 'min_zoom', 'max_zoom', 'format', 'time', 'tilematrixset', 'opacity', 'active', 'user']


class CategoriasCapasForm(forms.ModelForm):

    class Meta:
        model = CategoriasCapas
        fields = ['name', 'user']


class ServicioIDEForm(forms.ModelForm):
    
    class Meta:
        model = ServiciosIDEConfig
        fields = ['name', 'url', 'user']


class LayersForm(forms.ModelForm):

    class Meta:
        model = TileLayerWMS
        fields = ['name', 'layer_name', 'styles', 'format', 'transparent', 'version', 'crs', 'uppercase', 'min_zoom', 'max_zoom', 
                   'opacity', 'attribution', 'active', 'tiles_size', 'servicio', 'categoria', 'user', 'min_x','min_y', 'max_x', 'max_y']
