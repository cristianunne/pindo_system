from django import forms
from configuration.models import CapasBases, CategoriasCapas

class CapasBasesForm(forms.ModelForm):

    class Meta:
        model = CapasBases
        fields = ['name', 'attribution', 'urlservice', 'subdomain', 'min_zoom', 'max_zoom', 'format', 'time', 'tilematrixset', 'opacity', 'active']


class CategoriasCapasForm(forms.ModelForm):

    class Meta:
        model = CategoriasCapas
        fields = ['name']
